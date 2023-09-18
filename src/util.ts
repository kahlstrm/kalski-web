import repos from "./reposhowcase.json";
import { RepoResponse } from "./types";

export const fetchReposFromApi = async () => {
  const reposhowcase = repos.map((n) =>
    fetch(`https://api.github.com/repos/${n}`).then((res) =>
      res.ok ? res.json().then((data) => data as RepoResponse) : null,
    ),
  );
  const responses = await Promise.all(reposhowcase).then((res) =>
    res.filter((a) => a != null),
  );
  if (responses.length == 0) {
    throw new Error("couldn't fetch github repos");
  }
  return responses;
};
