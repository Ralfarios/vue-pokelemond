declare interface String {
  /**
   * Capitalizing the first character of string.
   *
   * With this function, we can change the splitter between
   * word and join it with whatever characters you like. But
   * the output will be capitalized in every first character's word
   *
   * For example, given a string.
   * ```ts
   * const str = "yeah_science_b-word!";
   * str.capitalize("_", " ");
   * ```
   *
   * It will return
   * ```ts
   * "Yeah Science B-word!"
   * ```
   *
   * @param split Optional: Default is white space, you can add '-' for separate dash and add capital letter for each word
   * @param join Optional: Default is white space, you can add '-' for join each word with dash.
   */
  capitalize(split?: string | undefined | null, join?: string | undefined | null);
}
