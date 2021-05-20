const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userIsDrugAdmin = ({ authentication: { item: user } }) => Boolean(user && user.userIsDrugAdmin || user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const access = {userIsAdmin,userOwnsItem,userIsDrugAdmin}

const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

module.exports =  { userIsAdmin, userOwnsItem, userIsAdminOrOwner, userIsDrugAdmin };