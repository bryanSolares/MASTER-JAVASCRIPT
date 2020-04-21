import { Component, OnInit, OnDestroy } from "@angular/core";
import { Project } from "../../models/project.model";
import { ProjectService } from "../../services/project.service";
import { UploadService } from "../../services/upload.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "../create/create.component.html",
  styleUrls: ["./edit.component.css"],
  providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit, OnDestroy {
  public title: string;
  public project: Project;
  public status: boolean;
  public filesToUpload: Array<File>;
  public sub: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _activateRouter: ActivatedRoute
  ) {
    this.title = "Editar Proyecto";
  }

  ngOnInit(): void {
    this._activateRouter.params.subscribe((params) => {
      let id = params.id;
      this.getProject(id);
    });
  }

  getProject(id): void {
    this.sub = this._projectService.getProject(id).subscribe(
      (response) => {
        console.log(response.project);
        this.project = response.project;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit(form) {
    this._projectService.updateProject(this.project).subscribe(
      (response) => {
        if (this.filesToUpload) {
          this._uploadService
            .makeFileRequest(
              response.project._id,
              [],
              this.filesToUpload,
              "image"
            )
            .then((response) => form.reset())
            .catch((error) => console.error(error));
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
