import { Component, OnInit, OnDestroy } from "@angular/core";
import { Project } from "../../models/project.model";
import { ProjectService } from "../../services/project.service";
import { Global } from "../../services/global.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  providers: [ProjectService],
})
export class ProjectsComponent implements OnInit, OnDestroy {

  public projects:Project;
  public url:string;
  private sub:any;

  constructor(private _projectService: ProjectService) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.sub = this._projectService.getProjects().subscribe(
      (response) => {
        this.projects = response.projects;
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
