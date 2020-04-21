import { Component, OnInit, OnDestroy } from "@angular/core";
import { Project } from "../../models/project.model";
import { ProjectService } from "../../services/project.service";
import { Global } from "../../services/global.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
  providers: [ProjectService],
})
export class DetailsComponent implements OnInit, OnDestroy {
  public project: Project;
  public url: string;
  private sub: any;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _activateRouter: ActivatedRoute
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._activateRouter.params.subscribe((params) => {
      let id = params.id;
      this.getProject(id)
        .then((data) => {
          this.project = data;
        })
        .catch((error) => console.error(error));
    });
  }

  getProject(id): Promise<Project> {
    return new Promise((resolve, reject) => {
      this.sub = this._projectService.getProject(id).subscribe(
        (response) => {
          return resolve(response.project);
        },
        (error) => {
          return reject(error);
        }
      );
    });
  }

  deleteProject(id) {
    this._projectService.deleteProject(id).subscribe(
      (response) => {
        this._router.navigate(["/proyectos"]);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
