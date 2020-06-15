import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, Button} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import Comments from './comments';

const Post = posts => {
  const [showComments, setShowComments] = useState(false);
  const [postId, setPostId] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentPosts, setCurrentPosts] = useState(posts.posts.slice(0, 3));
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const onPressLearnMore = () => {
    console.log(55);

    setCurrentPage(currentPage + 1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    setCurrentPosts(
      currentPosts.concat(posts.posts.slice(indexOfFirstPost, indexOfLastPost)),
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#E3F2FD',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <FlatList
        data={currentPosts}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          console.log(item);

          return (
            <View>
              <Card title={item.title.toUpperCase()}>
                <View style={{justifyContent: 'space-between'}}>
                  <Text style={{margin: 10}}>{item.body}</Text>
                  <Button
                    onPress={() => {
                      setPostId(item.id);
                      setShowComments(!showComments);
                    }}
                    title="Comments"
                    color="#BBDEFB"
                  />
                  {showComments && item.id == postId ? (
                    <Comments postId={postId} />
                  ) : (
                    <View></View>
                  )}
                </View>
              </Card>
            </View>
          );
        }}
        onEndReachedThreshold={0.1}
        onEndReached={onPressLearnMore}
        scrollEventThrottle={400}
      />
    </View>
  );
};

export default Post;
