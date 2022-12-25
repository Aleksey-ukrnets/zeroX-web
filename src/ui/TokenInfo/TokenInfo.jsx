import Grid from '@mui/material/Grid';
import { ContainerBox } from '../ContainerBox/ContainerBox';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import { Title } from '../../components/Title/Title';
import css from './token.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TwitterCard from '../TwitterCard/TwitterCard';

// avatar: 'https://pbs.twimg.com/profile_images/1542883661288194048/dx37WyUa_400x400.jpg';
// name: 'Directoapp';
// nick: 'directoapp';
// publish_timestamp: 1671813316;
// twit: 'To be part of our @directoapp_token proposition event you must be Whitelisted to participate. Whitelist today: http://shorturl.at/adJM7 $DRTP #Airdrops #IDO #CryptoNews #Token';
// twitter_link: 'https://twitter.com/';

export const TokenInfo = () => {
  let [twits, setTwits] = useState([]);
  //   const matches = useMediaQuery((theme) => {
  //     console.log(theme);
  //     if (theme) return theme.breakpoints.up('desktopLarge');
  //   });

  //   const ContainerBoxStyled = styled(ContainerBox)(({ theme }) => ({
  //     [theme.breakpoints.up('desktopLarge')]: {
  //       marginTop: '120px',
  //     },
  //   }));
  useEffect(() => {
    axios.get('https://zerox.pro/api/twitter').then((resp) => {
      console.log(resp, 'twitter');
      setTwits(resp.data.data);
    });
  }, []);
  return (
    <ContainerBox mt={17}>
      <Title>Token Info</Title>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <div className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                  Test
                </span>
                <span className="ml-4 text-sm">asdasd</span>
              </div>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                <span className="md:block">Expo token</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                In pursuit of more income, most of the users are trying to find
                tokens in the initial phase. Scammers, knowing this, mask their
                projects with vulnerabilities. Our goal is to provide you with a
                simple tool with information about tokens that have passed a
                full audit and minimize your risks.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <div className="px-4 py-8 sm:px-10">
                <div>
                  <p className="text-sm font-medium text-gray-700">Text 1</p>

                  <div className="mt-1 grid grid-cols-3 gap-3">
                    <div>
                      <a
                        href="#"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      ></a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or</span>
                  </div>
                </div>

                <div className="mt-6">asd</div>
              </div>
              <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                <p className="text-xs leading-5 text-gray-500">Text</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={css.twitterPosts}>
        {twits.map((el, index) => {
          return <TwitterCard key={index} data={el} />;
        })}
      </div>
    </ContainerBox>
  );
};
