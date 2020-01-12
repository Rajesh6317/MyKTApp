using MyKTAppWebAPI.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace MyKTAppWebAPI.Controllers
{
    public class MyKTAppController : ApiController
    {
        [HttpGet]
        [Route("api/getUser")]
        public string GetUser() {
            string userName ;
            return userName = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
            //return userName = User.Identity.Name;
        }

        [HttpPost]
        [Route("api/addTeam")]
        public HttpResponseMessage AddTeam()
        {
            string teamLogo = null;
            var httpRequest = HttpContext.Current.Request;
            
            //Upload Team Logo
            var uploadedLogo = httpRequest.Files["TeamLogo"];
            if (uploadedLogo != null)
            {
                //Create Custom FileName
                teamLogo = new string(Path.GetFileNameWithoutExtension(uploadedLogo.FileName).ToArray()).Replace(" ", "-");
                teamLogo = teamLogo + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(uploadedLogo.FileName);
                var teamLogoPath = HttpContext.Current.Server.MapPath("~/Common/Images/TeamLogo/" + teamLogo);
                uploadedLogo.SaveAs(teamLogoPath);
            }

            //Upload KT Plan
            var uploadKTPlan = httpRequest.Files["KTPlan"];
            string KTPlan = null;
            if (uploadKTPlan != null)
            {
                KTPlan = new string(Path.GetFileNameWithoutExtension(uploadKTPlan.FileName).ToArray()).Replace(" ", "-");
                KTPlan = KTPlan + "-" + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(uploadKTPlan.FileName);
                var KTPlanPath = HttpContext.Current.Server.MapPath("~/Common/KTPlans/" + KTPlan);
                uploadKTPlan.SaveAs(KTPlanPath);

            }
            //Save to Database
            using (MyKTAppDB db = new MyKTAppDB())
            {
                TEAM team = new TEAM()
                {
                    TEAM_FULL_NAME = httpRequest["teamFullName"],
                    TEAM_ABBREVIATED_NAME = httpRequest["teamAbbreviatedName"],
                    TEAM_DESCRIPTION = httpRequest["teamDescription"],
                    UPDATED_BY = httpRequest["userName"],
                };
                if (uploadedLogo != null) team.TEAM_LOGO_PATH = teamLogo;
                if (uploadKTPlan != null) team.TEAM_KT_PLAN_PATH = KTPlan;

                db.Configuration.ValidateOnSaveEnabled = false;
                db.TEAMs.Add(team);
                db.SaveChanges();
            }
            return Request.CreateResponse(HttpStatusCode.Created);
        }

        [HttpGet]
        [Route("api/GetTeams")]
        public IEnumerable<TEAM> GetTeams()
        {
            using (MyKTAppDB db = new MyKTAppDB())
            {
                return db.TEAMs.ToList();
            }
        }

        [HttpGet]
        [Route("api/GetTeam/{id}")]
        public TEAM GetTeam(int id)
        {
            using (MyKTAppDB db = new MyKTAppDB())
            {
                return db.TEAMs.FirstOrDefault(e => e.TEAM_ID == id);
            }
        }

        [HttpPost]
        [Route("api/UpdateTeam/{id}")]
        public HttpResponseMessage UpdateTeam(int id)
        {
            string teamLogo = null;
            var httpRequest = HttpContext.Current.Request;
            var uploadedLogo = httpRequest.Files["TeamLogo"];
            if (uploadedLogo != null)
            {
                //Create Custom FileName
                teamLogo = new string(Path.GetFileNameWithoutExtension(uploadedLogo.FileName).ToArray()).Replace(" ", "-");
                teamLogo = teamLogo + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(uploadedLogo.FileName);
                var teamLogoPath = HttpContext.Current.Server.MapPath("~/Common/Images/TeamLogo/" + teamLogo);
                uploadedLogo.SaveAs(teamLogoPath);
            }
            //Upload KT Plan
            var uploadKTPlan = httpRequest.Files["KTPlan"];
            string KTPlan = null;
            if (uploadKTPlan != null)
            {
                KTPlan = new string(Path.GetFileNameWithoutExtension(uploadKTPlan.FileName).ToArray()).Replace(" ", "-");
                KTPlan = KTPlan + "-" + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(uploadKTPlan.FileName);
                var KTPlanPath = HttpContext.Current.Server.MapPath("~/Common/KTPlans/" + KTPlan);
                uploadKTPlan.SaveAs(KTPlanPath);

            }

            //Save to Database
            using (MyKTAppDB db = new MyKTAppDB())
            {
                var teamDetails = db.TEAMs.FirstOrDefault(e => e.TEAM_ID == id);


                teamDetails.TEAM_FULL_NAME = httpRequest["teamFullName"];
                teamDetails.TEAM_ABBREVIATED_NAME = httpRequest["teamAbbreviatedName"];
                teamDetails.TEAM_DESCRIPTION = httpRequest["teamDescription"];
                teamDetails.UPDATED_BY = httpRequest["userName"];
                if (uploadedLogo != null) teamDetails.TEAM_LOGO_PATH = teamLogo;
                if (uploadKTPlan != null) teamDetails.TEAM_KT_PLAN_PATH = KTPlan;
                db.Configuration.ValidateOnSaveEnabled = false;
                db.SaveChanges();
            }
            return Request.CreateResponse(HttpStatusCode.Created);
        }

        [HttpPost]
        [Route("api/UploadDocument")]
        public HttpResponseMessage UploadDocument() {
            
            var httpRequest = HttpContext.Current.Request;
            var uploadedDocument = httpRequest.Files["documentToUpload"];
            string document = null;
            //Create Custom FileName
            document = new string(Path.GetFileNameWithoutExtension(uploadedDocument.FileName).ToArray()).Replace(" ", "-");
            document = document + "-"+ DateTime.Now.ToString("yymmssfff") + Path.GetExtension(uploadedDocument.FileName);
            var documentPath = HttpContext.Current.Server.MapPath("~/Common/Documents/" + document);
            uploadedDocument.SaveAs(documentPath);

            return Request.CreateResponse(document);
        }

        [HttpPost]
        [Route("api/addContent")]
        public HttpResponseMessage AddContent() {

            return Request.CreateResponse(HttpStatusCode.Created);
        }

        [HttpPost]
        [Route("api/updateContent/{id}")]
        public HttpResponseMessage UpdateContent(int id)
        {
            using (MyKTAppDB db = new MyKTAppDB()) {
                var teamDetails = db.CONTENTs.FirstOrDefault(e => e.CONTENT_ID == id);
            }
            return Request.CreateResponse(HttpStatusCode.Created);
        }
    }
}
