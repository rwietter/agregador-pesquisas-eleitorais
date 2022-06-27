import React from "react";

import { Link1Icon, Cross2Icon } from "@radix-ui/react-icons";
import {
  Fieldset,
  Flex,
  IconButton,
  Label,
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "./styles";

const PopoverMenu = () => (
  <Popover>
    <PopoverTrigger asChild>
      <IconButton aria-label="Update dimensions">
        <Link1Icon color="white" fontSize={50} />
      </IconButton>
    </PopoverTrigger>
    <PopoverContent sideOffset={5}>
      <Flex css={{ flexDirection: "column", gap: 20 }}>
        <Fieldset>
          <Label href="https://www.estadao.com.br/politica/eleicoes/agregador-pesquisa-eleitoral-2022/" target='_blank'>
            Estadão Dados
          </Label>
        </Fieldset>
        <Fieldset>
          <Label href="https://dash-eleitoral-cnn-pub.apps.ilocomotiva.com.br/" target='_blank'>
            CNN Média Dados
          </Label>
        </Fieldset>
        <Fieldset>
          <Label href="https://www.poder360.com.br/pesquisas-de-opiniao/" target='_blank'>
            Poder360 Dados
          </Label>
        </Fieldset>
        <Fieldset>
          <Label href="https://twitter.com/DataLagom" target='_blank'>DataLagom</Label>
        </Fieldset>
      </Flex>
      <PopoverArrow />
      <PopoverClose aria-label="Close">
        <Cross2Icon color="white" />
      </PopoverClose>
    </PopoverContent>
  </Popover>
);

export { PopoverMenu };
