import { Component, OnInit } from '@angular/core';
import {MyKTAppServiceService} from 'src/app/shared/my-ktapp-service.service';
import {TeamDetails} from 'src/app/app.module';

@Component({
  selector: 'app-add-new-component',
  templateUrl: './add-new-component.component.html',
  styleUrls: ['./add-new-component.component.css']
})
export class AddNewComponentComponent implements OnInit {

  public teamList : TeamDetails[];
  public fileToUpload : File = null;
  public documentName :string = '';
  public documentList: string[] = [] ;

  constructor(private service : MyKTAppServiceService) { }

  ngOnInit() {
    this.service.getTeams()
    .then(response => {
      this.teamList = response;
    })
  }
  ngDoCheck(){
    if (this.documentName != ''){
        this.documentList.push(this.documentName);
        this.documentName = '';
    }
  }

  public removeFile(fileName: string){
    const index: number = this.documentList.indexOf(fileName);
    if (index !== -1) {
        this.documentList.splice(index, 1);
    }  
  }

  public uploadDocument(doc :FileList){
    this.fileToUpload = doc.item(0);
    this.service.uploadDocument(this.fileToUpload)
    .toPromise().then(response => this.documentName = response as string)
  }


  public onSave(teamSelected,componentName,componentDescription){
    const description = componentDescription._editor.contentDocument.activeElement.innerHTML ;
    // this.service.addComponent()
    // .subscribe( data => {alert('Team Details Saveed Successfully');
    // window.location.href = '/TeamsOverview';
    console.log(teamSelected.value);
  //});
  }


  public tinymceInit = {
    branding: false,
      width: "100%",
      height: 600,
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
}
