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
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "#fd9644" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "#fed330" },
  { label: "Games", value: 4, icon: "cards", backgroundColor: "#26de81" },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  { label: "Sports", value: 6, icon: "basketball", backgroundColor: "#45aaf2" },
  {
    label: "Movies &  Music",
    value: 7,
    icon: "headphones",
    backgroundColor: "#4b7bec",
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
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
          numberOfColumns={3}
          placeholder="Category"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="POST" />
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
