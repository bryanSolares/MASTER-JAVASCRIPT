import { Component, OnInit } from "@angular/core";

import { Project } from "../../models/project.model";
import { ProjectService } from "../../services/project.service";
import { UploadService } from "../../services/upload.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
  providers: [ProjectService, UploadService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: boolean;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear Proyecto";
    this.project = new Project("", "", "", "", 2020, "", "");
  }

  ngOnInit(): void {}

  onSubmit(form) {
    this._projectService.saveProject(this.project).subscribe(
      (response) => {
        console.log(response);
        if (this.filesToUpload) {
          this._uploadService
            .makeFileRequest(
              response.project._id,
              [],
              this.filesToUpload,
              "image"
            )
            .then((response) => {
              this.status = true;
              form.reset();
              console.log(response);
            })
            .catch((error) => console.error(error));
        }
      },
      (error) => {
        this.status = false;
        console.error(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
