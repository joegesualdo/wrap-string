function wrapString(opts) {
  // Throw and error if required options are not provided.
  if (!opts ||
      !opts.string ||
      !opts.append ||
      !opts.prepend) {
    throw new Error(
      "Must provide the following option parameters:" +
      "'string', 'append', 'prepend'"
    );
  }

  return opts.prepend + opts.string + opts.append;
}

module.exports = wrapString;
