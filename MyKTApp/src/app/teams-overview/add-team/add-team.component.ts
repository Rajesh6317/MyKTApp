import { Component, OnInit } from '@angular/core';
import { MyKTAppServiceService } from 'src/app/shared/my-ktapp-service.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  providers:[MyKTAppServiceService]
})
export class AddTeamComponent implements OnInit {
  public ImageFolder: string = "src/assets/TeamImages";
  public teamLogoPath: string ="../../../assets/TeamImages/default-team-logo.png"
  public uploadedLogo : File = null;
  public path : string =  "/AddTeam";
  constructor(private addTeam : MyKTAppServiceService) { }
  
  ngOnInit() {
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
      this.teamLogoPath = event.target.result;
    }      
    reader.readAsDataURL(this.uploadedLogo);
  }

  public onSave(teamFullName, teamAbbreviatedName, teamLogo, teamDescription){
    const description = teamDescription._editor.contentDocument.activeElement.innerHTML ;
    this.addTeam.postFile(teamFullName.value,teamAbbreviatedName.value,this.uploadedLogo,description)
    .subscribe( data => {alert('Team Details Saveed Successfully');
    window.location.href = '/TeamsOverview';
  });
  }
}
