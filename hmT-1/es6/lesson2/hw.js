function watchObj(node) {
  /* return new Proxy(node, {...}) */
  return node;
}

class EmailParser {
  constructor(email) {
    this.email = email;
  }
}

export { watchObj, EmailParser };
