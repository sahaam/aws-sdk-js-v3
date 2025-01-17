import { Paginator } from "@aws-sdk/types";

import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { Keyspaces } from "../Keyspaces";
import { KeyspacesClient } from "../KeyspacesClient";
import { KeyspacesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KeyspacesClient,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagsForResourceCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Keyspaces,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.listTagsForResource(input, ...args);
};
export async function* paginateListTagsForResource(
  config: KeyspacesPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsForResourceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTagsForResourceCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Keyspaces) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KeyspacesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Keyspaces | KeyspacesClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
