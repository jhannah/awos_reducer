use v5.20;
use HTML::TableExtract qw(tree);
#use Data::Printer;


# Read the file which tells us which sites we care about.
my %sites;
open my $in, "<", "sites.txt";
while (<$in>) {
  chomp;
  $sites{$_} = 1;
}
close $in;


# Parse the input HTML
my $te = HTML::TableExtract->new();
$te->parse_file("input/in.html");
my ($top_table, $bottom_table) = $te->tables;


# Nuke the <td>s we don't want out of the top table.
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


# Nuke the <tr>s we don't want out of the bottom table.
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


# Print the whole page:
$tree = $te->tree;
say $tree->as_HTML;


