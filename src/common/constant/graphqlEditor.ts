export const SCHEMA = {
  INIT_VALUE: `query {
  album (id:4) {
    title
    user {
      name
      email
      company {
        name
      }
    }
  }
}`,
};

export const EDITOR = {
  TAB_SIZE: 2,
};
