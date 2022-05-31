import { SheetConfig } from "sheetsConfig";
import { getBooleanValidation_ } from "utils";

function studentInfoFixtures_(): [
  firstName: string,
  lastName: string,
  email: string,
  isActive: boolean
][] {
  return [
    ["Marcus", "Connolly", "mnjconnolly@gmail.com", true],
    ["Laurence", "Lessard", "laurencelessard@gmail.com", true],
    [
      "Mark",
      "Bardei",
      "markymark@hotmail.com,karina_muscles@flexing.com",
      true,
    ],
    ["James", "Connolly", "yogoyou@gmail.com", true],
  ];
}

export const studentInfoSheetConfig: SheetConfig = {
  name: "Student Info",
  headers: ["First Name", "Last Name", "Email", "Is Active"],
  setup: (sheet) => {
    const isActiveRange = sheet.getRange("D2:D");
    isActiveRange.setDataValidation(getBooleanValidation_());
  },
  fixtures: studentInfoFixtures_(),
  alternateColors: true,
};
