import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'react-native-axios';
import Toast from 'react-native-root-toast';
import Post from './post';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postsFetched, setPostsFetched] = useState(false);

  useEffect(() => {
    if (!postsFetched) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
          console.log(123);
          setPosts(res.data);
          setLoading(false);
          setPostsFetched(true);
        })
        .catch(err => console.log(err.message));
    }
  }, [posts]);

  useEffect(() => {
    if (!loading) {
      Toast.show('Posts loaded successfully!');
    }
  }, [loading]);
  return (
    <View>
      {loading ? (
        <Spinner visible={loading} textContent={'Loading...'} />
      ) : (
        <Post posts={posts} />
      )}
    </View>
  );
};

export default Main;
