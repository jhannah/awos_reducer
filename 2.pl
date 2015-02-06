use v5.20;
use HTML::TableExtract qw(tree);
use Data::Printer;

my %sites;
open my $in, "<", "sites.txt";
while (<$in>) {
  chomp;
  $sites{$_} = 1;
}
close $in;

my $te = HTML::TableExtract->new();
$te->parse_file("input/in.html");
my ($top_table, $bottom_table) = $te->tables;

foreach my $row ($top_table->rows) {
  foreach my $f (@$row) {
    if (ref $f eq 'HTML::ElementTable::DataElement') {
      my $site = substr $f->attr('title'), 0, 3;
      unless ($sites{$site}) {
        $f->replace_content('');   # nuke it
      }
    }
  }
}

my @rows_to_delete;
my $row_count = 0;
foreach my $row ($bottom_table->rows) {
  my $locId = $row->[0];
  if (ref $locId eq 'HTML::ElementTable::DataElement') {
    my $site = $locId->id;
    unless ($sites{$site}) {
      push @rows_to_delete, $row_count;
    }
  }
  $row_count++;
}

my $tree = $bottom_table->tree;
foreach my $i (reverse @rows_to_delete) {
  my ($p) = $tree->row($i)->parent;
  $p->delete;
}

$tree = $te->tree;
say $tree->as_HTML;



