import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyKTAppServiceService } from 'src/app/shared/my-ktapp-service.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {
  public imagePath = "http://localhost:49355/MyKTAppWebAPI/Common/Images/TeamLogo/";
  public uploadedLogo : File = null;
  public aboutTeam;
  public KTPlanName : string;
  public hideKTPlanName : boolean = true;
  public KTPlan :File = null;

  constructor(private routeId :ActivatedRoute, private getTeamsService: MyKTAppServiceService) { }

  ngOnInit():void {
    let id = parseInt(this.routeId.snapshot.paramMap.get('id'));
    this.getTeamsService.getTeam(id)
    .then(data => {
      this.aboutTeam = data;
      if(data.TEAM_KT_PLAN_PATH != null){
        this.KTPlanName = data.TEAM_KT_PLAN_PATH;
        this.hideKTPlanName = false;
      }
    });
  }

  public ngDoCheck() {
    
  }
  
  public displayFile(file:FileList){
    this.KTPlan = file.item(0);
    this.KTPlanName = this.KTPlan.name;
    this.hideKTPlanName = false;
  }


  public tinymceInit = {
    branding: false,
      width: "100%",
      height: 300,
      plugins: ["lists advlist autolink link imagetools image charmap print preview hr anchor pagebreak", "placeholder", "image code",
          "searchreplace visualblocks code fullscreen insertdatetime media nonbreaking",
          "save table directionality emoticons template paste"],
      toolbar: "insertfile undo redo | styleselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code print preview media fullpage | forecolor backcolor emoticons",
      style_formats: [
          {
              title: "Headers", items: [
                  { title: "Header 1", format: "h1" },
                  { title: "Header 2", format: "h2" },
                  { title: "Header 3", format: "h3" },
                  { title: "Header 4", format: "h4" },
                  { title: "Header 5", format: "h5" },
                  { title: "Header 6", format: "h6" }
              ]
          },
          {
              title: "Inline", items: [
                  { title: "Bold", icon: "bold", format: "bold" },
                  { title: "Italic", icon: "italic", format: "italic" },
                  { title: "Underline", icon: "underline", format: "underline" },
                  { title: "StrikeThrough", icon: "strikethrough", format: "strikethrough" }
              ]
          },
          {
              title: "Blocks", items: [
                  { title: "Paragraph", format: "p" },
                  { title: "Blockquote", format: "blockquote" },
                  { title: "Paragraph", format: "div" },
                  { title: "Pre", format: "pre" }
              ]
          },
          {
              title: "Alignment", items: [
                  { title: "Left", icon: "alignleft", format: "alignleft" },
                  { title: "Right", icon: "alignright", format: "alignright" },
                  { title: "Center", icon: "aligcenter", format: "aligncenter" },
                  { title: "Justify", icon: "alignjustify", format: "alignjustify" },
              ]
          }
      ],
      statusbar: false,
      menubar: false,
      base_url: '/tinymce', // Root for resources
      suffix: '.min',       // Suffix to use when loading resources
  }

  public previewTeamLogo(file : FileList){
    this.uploadedLogo = file.item(0);
    //show image preview
    var reader =  new FileReader();
    reader.onload = (event:any) => { 
      this.imagePath = '';
      this.aboutTeam.TEAM_LOGO_PATH = event.target.result;
    }      
    reader.readAsDataURL(this.uploadedLogo);
  }

  public onUpdate(teamFullName, teamAbbreviatedName, teamLogo, teamDescription){
    const description = teamDescription._editor.contentDocument.activeElement.innerHTML ;
    this.getTeamsService.updateTeam(this.aboutTeam.TEAM_ID,teamFullName.value,teamAbbreviatedName.value,this.uploadedLogo,description, this.KTPlan)
    .subscribe( data => {alert('Team Details Updated Successfully');
    window.location.href = '/AboutTeam/'+this.aboutTeam.TEAM_ID;
  });
  }
}
