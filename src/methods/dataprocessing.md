---
shortTitle: Data processing & QC
order: 2
---
# Data processing and quality control

## Data processing

The original ITS data will be processed using [Qiime2](https://qiime2.org/).  <code>q2-dada2</code> plugin will be applied for Dada2 denoising, resulting in the generation of <code>ASVs</code> (amplicon sequence variants). In this step. the paired-end sequencing reads will be merged automatically. ASVs can be considered as more precise and reproducible than <code>OTUs</code> (operational taxonomic units). ASVs will be used for downstream analysis as an alternative to traditional OTUs. [Wikipedia: ASV](https://en.wikipedia.org/wiki/Amplicon_sequence_variant). Since Dada2 includes internal chimera checking and abundance filtering, no additional filtering steps are required.

## Quality control

Two rounds of quality control procedures were applied after data processing and taxonomy classification analysis. 
* First, samples (runs) contain only a single taxon (i.e., a species or genus accounts for more than 99.99% of total abundance) will be removed from subsequent analysis. And the abundance information will not be included in <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>.

* Then, samples (runs) with less than 20,000 reads or less than 50% of the original reads after processing will be marked as QC status = 0, which indicates that the sample is of low quality and should be used with caution.

* Other samples (runs) will be marked as QC status = 1, which indicates that the sample is of high quality.



## Taxonomic assignment to the sequenced reads

In the process of species classification annotation, we first imported a Qiime2-compatible version of the [UNITE database](https://unite.ut.ee/) for training the feature classifier (using Qiime2 plugins). Subsequently, we used the trained classifier to process the obtained ASVs, allowing us to determine the genera abundance composition for each sample. Relative abundances were then calculated for each sample, with the totaling abundance values of 100% respectively.

## Identification of genera co-occurrence

Co-occurred genera may be functionally relavent. In <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>, co-occurred genera pairs were identified for health and each disease separately. 

To investigate the co-occurrence patterns of fungal communities within each disease (or health), we utilized a dataset containing over 150 samples. We employed [SparCC](https://github.com/dlegor/SparCC) to calculate the co-occurrence between every pair of microbes. Genera with p-values below the threshold of 0.05 were filtered out.