import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateAppFeatureForm = () => {
  return (
    <Form style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2 style={{ marginBottom: '20px' }}>CREATE APP & FEATURE</h2>
      <FormGroup>
        <Label for="selectApp">SELECT APP *</Label>
        <Input type="select" name="select" id="selectApp">
          <option>NEW</option>
          {/* Add additional options here */}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="appName">APP NAME *</Label>
        <Input type="text" name="appname" id="appName" placeholder="Placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="featureName">FEATURE NAME *</Label>
        <Input type="text" name="featurename" id="featureName" placeholder="Placeholder" />
      </FormGroup>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button color="secondary">Cancel</Button>
        <Button color="danger">SAVE APP & FEATURE</Button>
      </div>
    </Form>
  );
};

export default CreateAppFeatureForm;