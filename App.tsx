import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  RefreshControl,
} from 'react-native';
import { GET } from './src/Services/API';
import { POSTER_IMAGE } from './src/config';
import { BACKDROP_IMAGE } from './src/config';
import Styles from './src/Styles';
import axios from 'axios';
import Loader from './src/Components/Loader';
import LinearGradient from 'react-native-linear-gradient';
import Header from './src/Components/Header';
import { BASE_URL } from './src/config';
import { API_KEY } from './src/config';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const [newData, setNewData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      setLoading(true);
      await axios
        .get(`${BASE_URL}?api_key=${API_KEY}${page}`) // page la gia tri nhu page = 1
        .then(res => {
          let response = res.data.results;
          setData([...data, ...response]); //set với list cũ + mới
          setLoading(false);
        });
    } catch (error) {
      console.error(error);//
    }
  };

  const handleRefresh = () => {
    setRefreshing(false);
    setPage(1); //get fisrt list
    fetchData();
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }

  const renderLoader = () => {
    return (
      loading ?
        <View style={{ width: 10, height: 30 }}>
          <Loader />
        </View> : null
    );
  }

  return (
    <View style={Styles.container}>
      <Header />
      <Text style={Styles.title}>
        Popular list
      </Text>
      {loading
        ? <Loader />
        : <FlatList
          keyExtractor={(item, index) => index.toString()} // vì movie list bị trùng id nên sẽ dùng index làm key
          data={data}
          renderItem={({ item }) => (
            <DisplayMovies
              item={item}
            />
          )}
          numColumns={2}
          onEndReached={handleLoadMore} //đến cuối list
          onEndReachedThreshold={0} // khoảnh cách đến cuối list sẽ ac
          ListFooterComponent={renderLoader} // hàm loader
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          }
        />
      }
    </View>
  );
}

const DisplayMovies = ({ item }) => {
  const [statusStr, setStatusStr] = useState(true);
  const [lastStr, setLastStr] = useState('');
  const [firstStr, setFirstStr] = useState('');

  useEffect(() => {
    const getStr = () => {
      const number_vote = item.vote_average;
      const str = number_vote.toString();

      if (str.length == 1) {
        setStatusStr(false);
        setFirstStr('');
        setLastStr('');
      } else {
        setFirstStr(str.charAt(0));
        setLastStr(str.charAt(str.length - 1));
        setStatusStr(true)
      }
    }
    getStr();
  }, []);

  return (
    <TouchableOpacity style={Styles.stylesTouchableOpacity}>
      <Image
        source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
        style={Styles.posterImage}
      />
      {/* <Text style={Styles.movieTitle}>{item.original_title}</Text> */}
      <LinearGradient
        colors={['orange', 'red']}
        style={Styles.circle}>
        {statusStr
          ? <View style={Styles.viewVote}>
            <Text style={Styles.textVoteFirst}>{firstStr}</Text>
            <Text style={Styles.textVote}>.{lastStr}</Text>
          </View>
          : <Text style={Styles.textVote}>{item.vote_average}</Text>
        }

      </LinearGradient>
    </TouchableOpacity>
  );
};

export default App;
