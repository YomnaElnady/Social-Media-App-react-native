import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, Button} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import Comments from './comments';

const Post = posts => {
  const [showComments, setShowComments] = useState(false);
  const [postId, setPostId] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentPosts, setCurrentPosts] = useState(posts.posts.slice(0, 2));
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const onPressLearnMore = () => {
    setCurrentPage(currentPage + 1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    setCurrentPosts(posts.posts.slice(indexOfFirstPost, indexOfLastPost));
  };

  return (
    <View
      style={{
        backgroundColor: '#E3F2FD',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <Button
        onPress={onPressLearnMore}
        title="Read More"
        color="#BBDEFB"
        style={{marginBottom: 20}}
      />
      <FlatList
        data={currentPosts}
        renderItem={({item}) => (
          <View>
            <Card title={item.title.toUpperCase()}>
              <View style={{justifyContent: 'space-between'}}>
                <Text style={{margin: 10}}>{item.body}</Text>
                <Button
                  onPress={() => {
                    setPostId(id);
                    setShowComments(true);
                  }}
                  title="Comments"
                  color="#BBDEFB"
                />
                {showComments ? <Comments postId={item.id} /> : <View></View>}
              </View>
            </Card>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Post;
