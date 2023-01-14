String.prototype.capitalize = function (split = " ", join = " ") {
  return this?.split(split)
    ?.map((l) => l?.[0]?.toUpperCase()?.concat(l?.slice(1)))
    ?.join(join);
};
