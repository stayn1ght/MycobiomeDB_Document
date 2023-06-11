---
home: true
icon: home
title: Home
heroImage: /logo.svg
heroText: "MycgutDB: A database for the gut microbiome"
tagline: You can place the description of the project here.
actions:
  - text: How to Use 💡
    link: /demo/
    
  - text: Docs
    link: /guide/

  - text: How to Use MycgutDB 🥵
    link: /usage/figures
    type: primary

  - text: Materials and Methods 💥
    link: /methods/
    

features:
  - title: Main features
    details: overview of our website
    link: /webinterface/websiteoverview

  # - title: Markdown Enhance
  #   icon: markdown
  #   details: Add align, sup/sub script, footnote, tasklist, tex, flowchart, diagram, mark and presentation support in markdown
  #   link: https://theme-hope.vuejs.press/guide/markdown/

  - title: disease markers
    details: disease markers centric page
    link: /webinterface/diseasemarkerpages

  - title: Capture the full dynamics of human gut microbes
    details: Capture the full dynamics of the microbes living in the human gut
    link: https://gmrepo.humangut.info/phenotypes

  - title: Emphasize on data quality and re-usability
    details: we emphasize on **data quality** and **re-usability** (i.e., availability of the host meta-data).
    link: /methods/dataprocessing

copyright: false
footer: Theme by <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> | MIT Licensed, Copyright © 2019-present Mr.Hope
---

# Home 默认第一个标题不会显示，具体应该看教程
# Welcome to <b><span style="color:darkblue">M</span><span style="color:red">ycobiome</span><span style="color:forestgreen">DB</span></b>


<b><span style="color:darkblue">M</span><span style="color:red">ycobiome</span><span style="color:forestgreen">DB</span></b>
 is a curated database of human gut metagenomes. Please choose a topic on the left navigation panel to continue.

## Citation

Please cite our latest publication if you find this resource useful:

[Dai, D. *et al.* "GMrepo v2: a curated human gut microbiome database with special focus on disease markers and cross-dataset comparison". *Nucleic Acids Res* (2022). Volume 50, Issue D1, Pages D777–D784.](https://doi.org/10.1093/nar/gkab1019){:target="_blank"}.



## What's new

### Nov 25, 2020

Added new pages:

* [curated projects](https://gmrepo.humangut.info/data/curatedprojects),
* [phenotype comparisons](https://gmrepo.humangut.info/phenotypes/comparisons), and
* [marker taxa](https://gmrepo.humangut.info/taxon/markertaxa).

## Aims and features of <b><span style="color:darkblue">M</span><span style="color:red">ycobiome</span><span style="color:forestgreen">DB</span></b>

### Capture the full dynamics of human gut microbes

With <b><span style="color:darkblue">M</span><span style="color:red">ycobiome</span><span style="color:forestgreen">DB</span></b>,
we aim to capture the full dynamics of the microbes living in the human gut, including their

* abundances and prevalence,
* associations with [human health and diseases](https://gmrepo.humangut.info/phenotypes) , and
* co-occurrences,

all of which can be further stratified by using manually curated meta-data:

* population (country),
* gender,
* age,
* body mass index, and
* many other available meta data.

### Emphasize on data quality and re-usability

With <b><span style="color:darkblue">M</span><span style="color:red">ycobiome</span><span style="color:forestgreen">DB</span></b>,
we emphasize on **data quality** and **re-usability** (i.e., availability of the host meta-data).
We thus:

* manually extracted and curated relevant meta-data (most of the time with difficulties) from public databases and related publications;
* consistently re-annotated all data using state-of-the-art methods (see the [Materials and methods](methods/dataprocessing.md) page for details);
* applied vigorous quality control (QC) methods and stringent criteria to the data, in order to include only high quality data, but nonetheless kept the meta-data of the samples and runs in our database.

### Make relevant information easier to find

In order to further facilitate users to find data of interests, we equipped <b><span style="color:darkblue">M</span><span style="color:red">ycobiome</span><span style="color:forestgreen">DB</span></b> with
[a graphical query builder (data selector)](https://gmrepo.humangut.info/home) to help users to create complex and flexible queries with a few clicks. So far the data selector allows users to filter samples and runs by related technical meta data such as <code>experiment type (16S or Metagenomics)</code>, <code>number of sequenced reads</code>, and host- related meta data, including related phenotype (<code>disease or health</code>), <code>age</code>, <code>sex</code>, and <code>BMI (body mass index)</code>. More filters will be added in the future.
For example, the screenshot below allows users to search for samples (runs) that:

* were taken from healthy individuals with BMI (body mass index) over 25, <code>AND</code>
* were sequenced by either 16S <code>OR</code> metagenomics.

![](https://github.com/evolgeniusteam/gmrepodocumentation/blob/main/gmrepodocumentation/site/images/index/query_builder_example.png)

See [Use the graphic data selector](usage/graphicquirybuilder.md) for details and more examples.