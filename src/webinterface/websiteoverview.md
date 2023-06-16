---
index: false
---
# Website overview

## The Main / Home page

The main containts of the [home page](https://mycobiome.humangut.info/home) contain three main sections: 

### 1. brief summary of db contents

This sections contain:

* the main features of <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>
* main contents of the database and links to the corresponding pages.

### 2. a disease marker genus network

This section contains a network of disease marker genera combined from all disease in <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>. The circular nodes represent the marker genus of disease, whereas the pin-shaped nodes represent diseases themselves. The red edges indicate that the genus is enriched in disease, while the blue edges indicate enrichment in health.

![](/assets/images/index/disease_marker_genus_network.png)

### 3. a graphic data selector

A graphic data selector that allows users to construct complex queries to the projects and runs in our database. It consists of two selectors, one is dedicated for searching for <code>samples/runs</code>, the other is for <code>projects</code>.

Below is a screenshot of the selector:

![](/assets/images/index/query_builder_example.png)

The search logic is to find <code>runs/samples</code> that are: 

* related to healthy individuals, <code>AND</code>,
* 18 to 25 years old, <code>AND</code>,
* with healthy BMI from 18.5 to 24.9.

See the [Database usage](../usage/graphicquirybuilder.md) section for details and more examples.

## Header bar / navigation bar

The header bar is the most important widget of 
<b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>.

It is fixed to the top so it is placed at the top of windows.

It plays two major roles, navigation and global search. See the screenshot below:

![](/assets/images/websiteoverview/header_bar.png)

### 1. Logo

It displays a logo of <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>. Users can click this logo and navigate back to the [home page](https://mycobiome.humangut.info/home).

### 2. Menu items / navigation items

This section contains menu and sub-menu items that allow users to navigate through the main contents of <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>.

::: info These (sub)menu items include

* <HopeIcon icon="home" color="gray" /> Home : navigate back to the [home page](https://mycobiome.humangut.info/home).
* <HopeIcon icon="discover" color="gray" /> Phenotypes : mouse over or click  to show two sub-menus:
    * <HopeIcon icon="discover" color="gray" /> All phenotypes: go to the [List of diseases and their associated gut microbes](https://mycobiome.humangut.info/phenotypes).
    * <HopeIcon icon="branch" color="gray" /> Phenotype comparisons: contains a list of disease-health or disease-disease comparisons for which [microbial markers have been identified](https://mycobiome.humangut.info/phenotypes/comparisons).
* <HopeIcon icon="class" color="gray" /> Taxa: contains two sub-menus:
    * <HopeIcon icon="class" color="gray" /> All taxa: list and characterisations of [gut microbes](https://mycobiome.humangut.info/taxon) at species and genus levels identified from all qualified samples;
    * <HopeIcon icon="relation" color="gray" /> Marker taxa: list and distribution of [marker taxa](https://mycobiome.humangut.info/taxon/markertaxa) at species and genus levels identified from curated projects.
* <HopeIcon icon="mysql" color="gray" /> Data: contains two submenus:
    * <HopeIcon icon="mysql" color="gray" /> All projects and runs: lists of [projects, runs and related metadata](https://mycobiome.humangut.info/data),
    * <HopeIcon icon="branch" color="gray" /> Curated projects: a list of [curated projects](https://mycobiome.humangut.info/data/curatedprojects).
*  <HopeIcon icon="info" color="gray" /> Help: link to this documentation.
:::

## Footer

The footer shows at the bottom of all pages and contains copyright information and links to 
[contact information](#contact-information).

## Contact information

This database is a collaboration by:

* [Chen Lab at Huazhong University of Science and Technology (HUST)](http://chenlab.medgenius.info/),
* [Xue Lab at HUST](http://google.com).