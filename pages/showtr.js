import Head from 'next/head'
import Image from 'next/image'
import { createGQLClient } from "../utill/GQLClient";
import gql from "graphql-tag";
import Profile from '../components/cards/Profile';
//email, phone, des, cid, url



export default function ShowTrainers({ names }) {
  return (

    <div class="flex flex-wrap items-center justify-center">
      {names.map((d) => (
        <Profile
          name={d.attributes.Name}
          nic={d.attributes.nic}
          email={d.attributes.Email}
          phone={d.attributes.PhoneNumber}
          des={d.attributes.Description}
          cid={d.attributes.cid}
          url={d.attributes.Image.data.attributes.formats.thumbnail.url}
          //img={d.attributes.Image.data.attributes.formats.me}
     
        />
      ))}
    </div>
  )



}

export const getServerSideProps = async (context) => {

  const client = createGQLClient();

  const { data } = await client.query({

    query: gql` 
    query{
      trainers{
        data{
          id
          attributes{
            Name
            nic
            Email
            PhoneNumber
            Description
            cid
            Image{
              data{
                attributes{
                  name
                  formats
                }
              }
            }
          }
        }
      }
    } 
    `
  });

  return {
    props: {
      names: data.trainers.data
    }
  }

}
