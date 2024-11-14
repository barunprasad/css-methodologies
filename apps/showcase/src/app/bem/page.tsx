import { Button, Alert, Chip, Typography } from '@css-methodologies/bem';
export default function Index() {
  return (
    <div>
      <Typography variant="heading">Alerts</Typography>
      <Alert>This is the default alert type</Alert>
      <Alert type="success">This is the success alert type</Alert>
      <div>
        <Typography variant="heading">Buttons</Typography>
        <Button>Default BEM Button</Button>
        <Button variant="primary">Primary BEM Button</Button>
        <Button variant="secondary">Secondary BEM Button</Button>
      </div>
      <div>
        <Typography variant="heading">Chips</Typography>
        <Chip>Default chip variant</Chip>
        <Chip variant="primary">Primary chip variant</Chip>
        <Chip variant="secondary">Secondary chip variant</Chip>
      </div>
    </div>
  );
}
