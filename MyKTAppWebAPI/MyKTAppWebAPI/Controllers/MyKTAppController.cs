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
        [HttpPost]
        [Route("api/addTeam")]
        public HttpResponseMessage AddTeam() {
            string teamLogo = null;
            var httpRequest = HttpContext.Current.Request;

            var uploadedLogo = httpRequest.Files["TeamLogo"];
            //Create Custom FileName
            teamLogo = new string(Path.GetFileNameWithoutExtension(uploadedLogo.FileName).ToArray()).Replace(" ", "-");
            teamLogo = teamLogo + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(uploadedLogo.FileName);
            var teamLogoPath = HttpContext.Current.Server.MapPath("~/Images/TeamLogo/" + teamLogo);
            uploadedLogo.SaveAs(teamLogoPath);

            //Save to Database
            using (MyKTAppDB db = new MyKTAppDB()) {
                TEAM team = new TEAM()
                {
                    TEAM_FULL_NAME = httpRequest["teamFullName"],
                    TEAM_ABBREVIATED_NAME = httpRequest["teamAbbreviatedName"],
                    TEAM_LOGO_PATH = teamLogo,
                    TEAM_DESCRIPTION = httpRequest["teamDescription"]
                };
                db.Configuration.ValidateOnSaveEnabled = false;
                db.TEAMs.Add(team);
                db.SaveChanges();
            }
            return Request.CreateResponse(HttpStatusCode.Created);
        }

        [HttpGet]
        [Route("api/GetTeams")]
        public IEnumerable<TEAM> GetTeams() {
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

    }
}
