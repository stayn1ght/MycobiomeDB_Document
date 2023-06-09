---
order: 2
---

# Disease centric pages

There are in total **three** types of disease centric web pages <HopeIcon icon="page" color="gray" /> that are designed to present disease related information, which are detailed below:

## <HopeIcon icon="page" color="gray" size="24px" /> [Disease (diseases and health) page](https://mycobiome.humangut.info/phenotypes)

This page lists all diseases that have been assocaited with the alterations of gut microbes.

Its main contents is a table that lists statistics of 131 diseases collected in our database, see the screenshot below:

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/websiteandUI/images/diseasecentricpages/phenotypes_table.png)

In addition to the data table, several control widgets are available on the top of the table (marked by the red box). Users can use them to find information in the table that they are interested in. 

::: note Widgets to filter the table contents
The widgets in the above screenshot are:

1. filter the table using <code>user supplied</code> key words;
    
2. filter the contents of the table that DO NOT contain the <code>user supplied</code> key words;
    
3. do filtering;
    
4. clear searching results and reset the table
:::

Click any one of the disease names, users will be redirected to the corresponding page dedicated to disease-gut microbe associations.

## <HopeIcon icon="page" color="gray" size="24px" /> Gut microbes associated with a specific disease

This page is used to decribe in details of gut microbiota data associated with a specific disease. 

This page typically consists of four sections. Below the [Irritable Bowel Syndrome](https://mycobiome.humangut.info/phenotypes/D043183) page is used as an example.

### 1. Overview of <code>Irritable Bowel Syndrome</code> associated gut microbiota data

This section first gives a brief description of the disease (or health) according to the MeSH (Medical Subject Headings) database, then summarises the: 

* number of related projects;
* number of total runs in the related projects;
* number of processed runs, whose raw sequence data have been downloaded, quality checked and analyzed;
* number of valid runs that passed our [quality control procedures](../methods/dataprocessing.md#quality-control).

### 2. Overview of disease markers

This section uses a table to list the numbers of marker taxa identified between:

* either <code>Irritable Bowel Syndrome</code> and controls.

See the screenshot below:

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/websiteandUI/images/diseasecentricpages/disease_marker_table_crohn_disease.png)

::: note
* 'Control Groups' and 'Health' are two MeSH IDs commonly used to describe control samples. The main difference between the two is that 'Health' refers to individuals who do not have any detectable dieases, while 'Control Groups' refers to those who do not have the disease ofinterest, for example 'Irritable Bowel Syndrome' in this case. Thus, in this case the 'Control Groups' also refers to the non-'Irritable Bowel Syndrome' group.
* the **'Nr. marker taxa'** column reports the total number of markers at both genus and species levels. If marker taxa have been identified in multiple projects for the same phenotype pair (e.g., Irritable Bowel Syndrome vs. health), the uniuqe number of all the markers will be reported.
:::

### 3. Four tables list associated species, genera, projects and runs

This section contains **four tables** that list:

* species that were identified from the valid runs associated with the disease (<code>Irritable Bowel Syndrome</code> in this example), and their prevalences and abundances in the valid runs;
* genera that were identified from the valid runs associated with <code>Irritable Bowel Syndrome</code> , and their prevalences and abundances in the valid runs;
* related project IDs, descriptions and publications (if there is any);
* related runs and their QC statuses. 

Each table is equipped with a set of control widgets allowing users to search the table and filter the rows accordingly.

See the screenshot below:

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/websiteandUI/images/diseasecentricpages/phenotypedetails_page_tables.png)

### 4. a dot plot summarises taxon abundances as a function of prevalence

As shown below:

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/websiteandUI/images/diseasecentricpages/phenotype_details_dotplot.png)

Each dot represents a taxon (species or genus).

::: note
* **Prevalence**: proportion of samples in which a species/genus is found above certain abundance threshold (e.g. 0.01%).
* **Abundance**: mean/median relative abundance of a species in all samples of a phenotype (e.g., <code>Irritable Bowel Syndrome</code>).
:::

### 5. a network plot of co-occurred taxa

Below is a screenshot of the network and its control widgets:

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/websiteandUI/images/diseasecentricpages/crohn_disease_network.png)

::: info The four main components of the screenshot
1. a search widget allows uses to find species or genus of interests in the network; it is also a droplist that allows users to select thespecies/genus in the network. The plot will center on the node when it is selected.

2. the taxon co-occurrence network. See details below.

3. buttons to save the network to external files in either PNG or SVG format.

4. a link to download the pair-wise interaction relationships and other relavent information as a text file.
:::

::: info The network
Here the **nodes** refer to : species or genera co-occurred with others in samples of this phenotype; the sizes are proportional to the numberof connected nodes in the network.

**The links** refer to : co-occur relationships between species or genera; the widths are proportional to the absolute value of the correlationcoefficient (Pearson correlation), while the colors indicate positive (green) or negative (red) correlations.
:::

::: info The co-occurrence between two taxa
Two taxa (i.e., either two species or genera) will be considered as **co-occurred** in the disease (<code>Irritable Bowel Syndrome</code>) associatedsamples if they meet the following criteria:

<code>SparCC</code> was used to calculate the odds of the two taxa to co-occur in the disease associated samples/runs basedon their relative abundance information. A p-value and odds ratio (OR) were reported for each pair. The pair with p-value < 0.05 was selected.
:::

::: note Usage of the network plot
* <code>mouse over a node</code> to <br />
    * highlight the node and its direct neighbors, and <br />
    * show the names of the node and its direct neighbors;
* <code>click a node</code> to highlight it and its direct neighbors
* <code>click a node and move it around </code>to fade other nodes and edges;
* <code>click the text label</code> of a node to show the association details in a new window;
* <code>double-click a node</code> to move it to the canvas center;
* <code>double-click the canvas</code> to zoom in;
* <code>use mouse wheel</code> to zoom in and out of the whole plot;
* <code>use the selector</code> on the top of the plot to find a node of interest and move it to the view center.
:::

## <HopeIcon icon="page" color="gray" size="24px" /> Association beteen a taxon and a disease

This page shows the distributions of a taxon (at species or genus level)  in samples associated with a specific disease. Here we use the [association between <b><i>[Ruminococcus] torques</i></b> and <code>Irritable Bowel Syndrome</code>](https://mycobiome.humangut.info/phenotypes/D003424/33039) as an example to explain the contents and organization of this page.

This page consists of four secdtions:

### 1. Overview of the association

This part contains:

* a brief description of this disease in the MeSH database;
* statistics on associated projects and runs
* statistics on the prevalence of <i>[Ruminococcus] torques</i> in disease associated samples;

This part also contains links to other pages in GMrepo:

* all dieases associated with the taxon,
* all gut microbes at species and genus levels associated with <code>Irritable Bowel Syndrome</code>,

and links to external databases, including:

* [NCBI taxonomic database](https://mycobiome.humangut.info/species/33039).

### 2. graphical representation of the association

This part includes two plots,

<b>a histogram</b>

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/websiteandUI/images/diseasecentricpages/phenotype_details_histogram.png)

and <b>a box plot</b>

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/websiteandUI/images/diseasecentricpages/phenotype_details_boxplot.png)

showing the distribution of the relative abundances across Irritable Bowel Syndrome associated samples.

::: tip
For comparison, the abundance distributions of the taxon (<i>[Ruminococcus] torques</i>) in all healthy samples will also be displayed.
:::

### 3. Relative abundance details of this taxon

This part contains a list of <code>Irritable Bowel Syndrome</code> associated samples in which <i>[Ruminococcus] torques</i> can be found. As shown below, in addition to the relative abundance values of <i>[Ruminococcus] torques</i>, meta-data of the samples are also shown, including age, gender and BMI information of the associated patients.

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/websiteandUI/images/diseasecentricpages/phenotype_details_taxon_abundances.png)

::: tip
1. users can download the data as a text file using the "Download data as csv" button above the table;
2. search widgets are available for users to search and filter the contents of this table.
:::

### 4. Taxa co-occurred with <i>[Ruminococcus] torques</i> in <code>Irritable Bowel Syndrome</code> associated samples

The co-occurred taxa were identified using methods and criteria described in the <b>co-occurrence between two taxa</b> section above.

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/websiteandUI/images/diseasecentricpages/phenotype_details_co_taxa.png)

::: tip
Users can download the data as a text file using the "Download all co-occurred pairs as csv" button below the table.
:::