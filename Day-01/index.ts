import { AzureFunction, Context, HttpRequest } from "@azure/functions";

interface IDreidelSymbol {
  code: string;
  name: string;
}

const faces: IDreidelSymbol[] = [
  {
    code: "נ",
    name: "Nun"
  },
  {
    code: "ג",
    name: "Gimmel"
  },
  {
    code: "ה",
    name: "Hay"
  },
  {
    code: "ש",
    name: "Shin"
  }
];

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  const faceIndex = Math.floor(Math.random() * 4);
  const face = faces[faceIndex];
  context.res = {
    body: `${face.code} ${face.name}`
  };
};

export default httpTrigger;
