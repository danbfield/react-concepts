export default `// Even though D is within the second div, we can render it
// within the first div, because we've set the node to the first div in our
// useEffect
useEffect(() => {
  setNode(document.getElementById('domNodeA'))
}, [])

<div id="domNodeA">
  <Paragraph>A</Paragraph>
  <Paragraph>B</Paragraph>
</div>

<div id="domNodeB">
  <Paragraph>C</Paragraph>
  {summoned && node && (
    <Portal domLocation={node}>
      <Paragraph>D</Paragraph>
    </Portal>
  )}
</div>
`
