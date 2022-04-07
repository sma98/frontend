import Profile from '../components/cards/Profile';
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/cards/Profile'))




function contact() {

    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;

        });
        fetch('/api/mail',{
       
            method:'post',
            body:JSON.stringify(formData)

        })
        console.log(formData);

    }

    return (
       
<div>


<form method="post" onSubmit={handleOnSubmit}>
    <p>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
    </p>
    <p>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" name="email" />
    </p>
    <p>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
    </p>
    <p>
      <button>Submit</button>
    </p>
  </form>

</div>
    )
   




    
}

export default contact


