export const TextUtils = {
  isHTMLString: (input: string): boolean => {
    // Regular expression to detect HTML tags
    const htmlRegex = /<\/?[a-z][\s\S]*>/i;

    // Check if the input string contains any HTML tags
    return htmlRegex.test(input);
  },
  /*</?: This matches either an opening (<) or closing (</) tag.
[a-z]: This matches the tag name (like div, p, etc.).
[\s\S]*: This matches any characters inside the tag.
The i flag makes the regex case-insensitive to match both lowercase and uppercase tag names.*/
};
