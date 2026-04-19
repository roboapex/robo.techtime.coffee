import React from "react";
import { Endpoints } from "@octokit/types";
import Link from "@docusaurus/Link";
import { useEffect } from "react";
import { useState } from "react";
import { Project } from "../../../types/projects";
import clsx from "clsx";
import { CompetitionCodes } from "../../../types/competitions";

import style from "./style.module.scss";

/**
 * nameData in the format {0: full_name, 1: eventCode, 2: eventRegion, 3: year, 4: groupName [, 5: projectName]}
 */
export default function ProjectTile({
  nameData,
  repo,
}: {
  nameData: string[];
  repo: Endpoints["GET /orgs/{org}/repos"]["response"]["data"][number];
}) {
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    setProject({
      groupName: nameData[5],
      projectName: nameData?.[5]?.replace("_", " ") ?? nameData[0],
      event: {
        code: nameData[1],
        name: CompetitionCodes[nameData[1]].region[nameData[2]].name,
        website: CompetitionCodes[nameData[1]].region[nameData[2]].website,
      },
      year: parseInt(nameData[4]),
    });
    console.log(nameData, repo)
  }, [repo]);

  return (
    <div className={clsx("card", style.tile)}>
      <Link href={repo?.html_url} style={{textDecoration: "none", color: "initial"}}>
      <div className="card__image">
        <img
          src={`https://picsum.photos/seed/${nameData[0]}/800/400`}
          alt="Placeholder Image"
          title="Placeholder Image"
        />
      </div>
      <div className="card__header">
        <h3 className={style.projectName}>{project?.projectName}</h3>
        <p>Last updated: {new Date(repo.pushed_at).toLocaleDateString("en-US")}</p>
        <i className="fas fa-star" />{repo.stargazers_count}
        <i className="fas fa-eye" />{repo.stargazers_count}
      </div>
      <div className="card__body">
        <p>{project?.groupName}</p>
        <p>{repo?.description ?? null}</p>
      </div>
      </Link>
    </div>
  );
}
