import React, { useState } from "react";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(5).label("Title"),
  category: Yup.object().required().nullable().label("Category"),
  price: Yup.number().required().min(1).label("Price"),
  description: Yup.string().required().min(5).label("Description"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ title: "", category: "", price: "", description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField autoCorrect={false} name="title" placeholder="Title" />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="REGISTER" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 10,
  },
});

export default ListingEditScreen;
