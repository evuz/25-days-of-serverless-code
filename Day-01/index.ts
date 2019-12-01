import { AzureFunction, Context, HttpRequest } from "@azure/functions";

import { faces } from './dreidel-symbol';

const httpTrigger: AzureFunction = async function(
  context: Context
): Promise<void> {
  const faceIndex = Math.floor(Math.random() * 4);
  const face = faces[faceIndex];
  context.res = {
    body: `${face.code} ${face.name}`
  };
};

export default httpTrigger;
