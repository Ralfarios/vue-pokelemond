declare interface Number {
  /**
   * Convert number value to string with zero and prefix in front of the number.
   *
   * For example, given a number.
   * ```ts
   * const num = 69;
   * num.digitize(3, "#");
   * ```
   *
   * It will return string
   * ```ts
   * "#069"
   * ```
   *
   *
   * @param digit How many zeros you want to add?
   * @param prefix Prefix for your digitized value for special occassion.
   */
  digitize(digit?: number, prefix?: string | undefined | null);
}

/** Prefix for your digitized value for special occassion
 *
 * _example: digitize({ value:`7`, prefix: '`#`' })_ \
 * _output: '`#007`'_
 *
 */
