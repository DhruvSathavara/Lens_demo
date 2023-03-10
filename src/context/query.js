import { gql } from "@apollo/client";
import { apolloClient } from "../services/ApolloClient"


export const GET_PROFILES_BY_ID = `
query($request: SingleProfileQueryRequest!) {
    profile(request: $request) {
        id
        name
        bio
        attributes {
          displayType
          traitType
          key
          value
        }
        followNftAddress
        metadata
        isDefault
        picture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        handle
        coverPicture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        ownedBy
        dispatcher {
          address
          canUseRelay
        }
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
          totalPublications
          totalCollects
        }
        followModule {
          ... on FeeFollowModuleSettings {
            type
            amount {
              asset {
                symbol
                name
                decimals
                address
              }
              value
            }
            recipient
          }
          ... on ProfileFollowModuleSettings {
            type
          }
          ... on RevertFollowModuleSettings {
            type
          }
        }
    }
  }
`;

const getProfileRequest = (request) => { 
    // console.log(request,'profile request');
    return apolloClient.query({
        query: gql(GET_PROFILES_BY_ID),
        variables: {
            request,
        },
    });
};

export const profileById = async (id) => {  
    // console.log(id,'get profile by id---- id');
    const request = { profileId: id };
    const profile = await getProfileRequest(request);  
    const pId = profile.data.profile;
    return pId;
};
