export function normalizeStr(str) {
  if (typeof str == "string") {
    return str
      .toLowerCase()
      .normalize("NFD")
      ?.replace(/[\u0300-\u036f]/g, "");
  }
  return "";
}

export const onlyText = (text) => {
  let validText = [];
  if (text) {
    validText = [...text].filter((carac) =>
      carac.match(/^(ç|Ç|\.|[a-zA-Zà-úÀ-Ú]|\s+)+$/)
    );
  } else {
    validText = [""];
  }

  return validText.join("");
};

export const maskText = (entry) => {
  const text = onlyText(entry);

  const capitalize = (name) => name.slice(0, 1).toUpperCase() + name.slice(1);

  // const abrev = (name) => name.includes('.') ? capitalize(name) : name.toLowerCase()
  const minor = (name) =>
    name.includes(".") || name.charAt(0) !== "d"
      ? capitalize(name)
      : name.toLowerCase();

  const formatedText = text
    .split(" ")
    .map((elem) => (elem.length < 4 ? minor(elem) : capitalize(elem)))
    .join(" ");

  return formatedText;
};

export const onlyNumbers = (text) => {
  if (text) {
    return text.split("").filter((letter) => letter.match(/\d/));
  } else {
    return "";
  }
};

export const maskPhone = (text) => {
  if (!text) {
    return "";
  }

  let numbers = onlyNumbers(text.toString());

  if (numbers.length < 1) {
    return "";
  }

  let ddd = numbers.slice(0, 2).join("");
  let prefix = numbers.slice(2, 6).join("");
  let sufix = numbers.slice(6, 11).join("");

  if (sufix.length > 0) {
    prefix = `${prefix}-`;
  }

  let fone = `(${ddd}) ${prefix}${sufix}`;

  if (sufix.length === 5) {
    fone = `${fone.slice(0, 9)}${fone.charAt(10)}-${fone.slice(11)}`;
  }
  if (text.length == 4) {
    fone = `(${ddd.slice(0, 1)}`;
  }

  return fone;
};
