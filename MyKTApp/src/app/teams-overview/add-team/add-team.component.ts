import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from 'src/assets/ngClassicEditor/build/ckeditor.js';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  public Editor = ClassicEditor;
  public ImageFolder: string = "src/assets/TeamImages";
  public teamDefaultLogo: string ="../../../assets/TeamImages/default-team-logo.png"
  constructor() { }

  ngOnInit() {
  }

  public editorConfig = {
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: 'ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    
      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
        'X-CSRF-TOKEN': 'CSFR-Token',
        Authorization: 'Bearer <JSON Web Token>'
      }
    }
    };

}
