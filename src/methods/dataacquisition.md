---
order: 1
---
# Data acquisition

## Raw sequencing data

Raw data, including sequences in FASTQ format were obtained from the following public databases:

* [ENA (European Nucleotide Archive)](https://www.ebi.ac.uk/ena/browse) at [EBI (European Bioinformatics Institute)](https://www.ebi.ac.uk/) of [EMBL (European Molecular Biology Lab)](https://www.embl.de/),
* [SRA (Sequence Read Archive) database](https://www.ncbi.nlm.nih.gov/sra) at [NCBI (National Center for Biotechnology Information)](https://www.ncbi.nlm.nih.gov/) , and
* [HMP (Human Microbe Project)](https://www.hmpdacc.org/)
<!-- * [AGP (American Gut Project) ](http://americangut.org/) -->


Data were downloaded using [enaBrowserTools](https://github.com/enasequence/enaBrowserTools) and [SRA-Tools](https://github.com/ncbi/sra-tools) facilitated by Aspera (a high-speed data transfer tool).

## Meta data

Meta-data were first extracted using in-house Perl/R/Python scripts and then manually curated at least two-rounds to ensure the quality. Meta-data curation was not painless because sometimes such information were often incomplete, misplaced or even completely missing. Very often we had to consult the description of the samples, supplementary data of related publications or sometimes even the authors.

Technical meta-data extracted include:

* sequencing devices / instruments, and
* number of obtained sequencing reads.

Host-related, biological-relevant meta-data extracted include:

* disease or health of the host (refered as to <code>disease</code> in our database),
* age,
* sex,
* BMI (body mass index), and
* antibiotic usage (within six months).

More meta-data will be added in the future.
