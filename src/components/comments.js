import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, Button} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import axios from 'react-native-axios';
import Spinner from 'react-native-loading-spinner-overlay';

const Comments = id => {
  const [comments, setComments] = useState([]);
  const [commentsFetched, setCommentsFetched] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!commentsFetched) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id.postId}/comments`)
        .then(res => {
          setComments(res.data);
          setShowComments(true);
          setCommentsFetched(true);
          setLoading(false);
        });
    }
  }, [comments]);
  return (
    <View>
      {loading ? (
        <Spinner visible={loading} textContent={'Loading...'} size="small" />
      ) : (
        <View
          style={{
            backgroundColor: '#E3F2FD',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <FlatList
            data={comments}
            renderItem={({item}) => (
              <View>
                <Card title={item.name.toUpperCase()}>
                  <View style={{justifyContent: 'space-between'}}>
                    <Text style={{margin: 10}}>{item.body}</Text>
                  </View>
                </Card>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default Comments;
