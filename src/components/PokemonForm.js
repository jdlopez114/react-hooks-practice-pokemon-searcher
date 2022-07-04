import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {

  const [formData, setFormData] = useState(
    {
      "id": "",
      "name": "",
      "hp": "",
      "sprites": {
        "front": "",
        "back": ""
      }
    }
  )

  function handleChange(e){
    setFormData({
      ...formData, [e.target.name] : e.target.value
    })
  }

  function handleSumbit(e){
    e.preventDefault()
    addNewPokemon(formData)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSumbit}
      >
        <Form.Group widths="equal">
          <Form.Input value={formData.name} onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input value={formData.hp} onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front} 
            onChange={handleChange} 
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
