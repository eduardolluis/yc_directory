// https://www.sanity.io/docs/structure-builder-cheat-sheet
import { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("startup").title("Startups"),
    ])

export default structure