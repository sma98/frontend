import { createGQLClient } from "../utill/GQLClient";
import gql from "graphql-tag";
import React from 'react'
import Eqcard from "../components/cards/eqcard";
//equipmentName,contactnumber,price,description



const equipment = ({ equipmentdata }) => {
    return (


        <div class="flex flex-wrap items-center justify-center">
            {equipmentdata.map((d) => (
                <Eqcard
                    equipmentName={d.attributes.equipmentName}
                    price={d.attributes.price}
                    description={d.attributes.description}
                    contactnumber={d.attributes.contactNumber}
                    url={d.attributes.Image.data.attributes.formats.thumbnail.url}

                />
            ))}
        </div>

    )
}

export default equipment
export const getServerSideProps = async (context) => {

    const client = createGQLClient();

    const { data } = await client.query({

        query: gql` 
        query
        {
        equipments
          {
            data
        
          
            {
              attributes
              
              {
                price
                contactNumber
                description
                equipmentName
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
            equipmentdata: data.equipments.data
        }
    }

}
//Ae1D6NVXCiOux-cMel1l9M5ou_e2cpNuqZJRzq87kB1z1V9K0XfFHptsyNoTQMwVp4Gjmfp0UY_BiyQk
//<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>