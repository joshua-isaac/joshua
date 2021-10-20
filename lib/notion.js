import { Client } from "@notionhq/client";

// create new notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// get notion database
export const getDatabase = async (databaseId, sorts) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: sorts,
  });
  return response.results;
};

// get notion page
export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });
  return response;
};

// get blocks
export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response;
};
