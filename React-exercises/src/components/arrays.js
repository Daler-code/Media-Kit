
// Nested Callbacks 

getUser('facebook/daler', (user, error) => {
  if (error) {
    throw (error)
  }

  const UserId = user.id;

  const getFriends = (UserId, (friends, error) => {
    if (error) {
      throw (error)
    } 

    const john = friends.find();

    const getPosts = (john, (posts, error) => {
      if (error) {
        throw(error)
      }
      const recentPost = posts[0];

      const getCommentsForPosts = (recentPost, (comments, error) => {
        if (error) {
          throw (error)
        }
        displayComments(comments);
      })
    })
  }) 
})

////////////////////////////////////////////////////////////////////////////

map();  // Creates new arrays using the existing arrays
const myArr = [1, 2, 3, 4, 5, 6];
myArr.map(() => + 1); // returns [2, 2, 3, 4, 5, 6];

////////////////////////////////////////////////////////////////////////////

filter(); // filter takes the old array and modifies it  by filtering it 
const myArray = [1, 3, 5, 7];
myArray.filter(el => el > 5); // returns 7 because we are taking greater than 5 which is 7;

/////////////////////////////////////////////////////////////////////////////

includes(); // takes array and looks for a value inside it whether it exists or not, and returns a boolean
            // it takes two arguments 1 value and the second the position index
const newArray = [ 1, 2, 3, 4, 5, 6 ];
newArray.includes(1, 0); // returns true, because it has value of 1 at postion 0;

///////////////////////////////////////////////////////////////////////////////

reduce();


find();


