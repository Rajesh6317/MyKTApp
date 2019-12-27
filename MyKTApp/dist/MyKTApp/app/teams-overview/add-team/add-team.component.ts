import { Component, OnInit } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as ClassicEditor from '@cdk';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  // public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
  }

  public editorConfig = {
    simpleUpload: {
      // The URL that the images are uploaded to.
      // uploadUrl: environment.postSaveRteImage,
    
      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
        'X-CSRF-TOKEN': 'CSFR-Token',
        Authorization: 'Bearer <JSON Web Token>'
      }
    }
  }
}
