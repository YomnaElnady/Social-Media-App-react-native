import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, Button} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import axios from 'react-native-axios';

const Comments = id => {
  const [comments, setComments] = useState([]);
  const [commentsFetched, setCommentsFetched] = useState(false);
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    if (!commentsFetched) {
      console.log(commentsFetched);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id.postId}/comments`)
        .then(res => {
          setComments(res.data);
          setShowComments(true);
          setCommentsFetched(true);
        });
    }
  }, [comments]);

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
              </View>
            </Card>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Comments;
